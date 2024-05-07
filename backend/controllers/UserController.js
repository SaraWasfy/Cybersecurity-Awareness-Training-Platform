const userModel = require("../models/user.js");
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    const newUser = new userModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      username: req.body.username,
      password: hashedPassword,
    });
    newUser.save().catch((err) => console.log(err));
    res.status(200).send("Created");
};
  
const getUsers = async (req, res) => {
    //retrieve all users from the database
    const users = await userModel.find({});
    console.log(users);
    res.status(200).send(users);
};

const updateUser = async (req, res) => {
    //update a user in the database
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    var Username = req.body.username;
    var Name = req.body.name;
    var Email = req.body.email;
    var Password = hashedPassword;
    var DateOfBirth = req.body.dateOfBirth;
    var Type = req.body.tyoe;
  
    userModel
      .findOneAndUpdate(
        { Username: Username },
        {
          Name: Name,
          Email: Email,
          Password: Password,
          DateOfBirth: DateOfBirth,
          Type: Type,
        }
      )
      .catch((err) => console.log(err));
    res.status(200).send("Updated");
};
  
const deleteUser = async (req, res) => {
    //delete a user from the database
    var Username = req.body.username;
    await userModel.deleteOne({ Username: Username });
    res.status(200).send("Deleted");
};
  
const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      const token = createToken(user._id);
      const maxAge = 3 * 24 * 60 * 60;
  
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

const logout = (req, res) => {
    // Clear the JWT cookie to log the user out
    res.clearCookie("jwt");
    res.status(200).json({ message: "Logged out successfully" });
};

const getProfile = async (req, res) => {
    const token = req.cookies.jwt;
  
    if (!token) {
      return res.status(401).json({ message: "You are not logged in." });
    }
  
    const decodedToken = jwt.verify(token, "supersecret");
    const userId = decodedToken.name;
    const user = await userModel.findById(userId);
  
    res.send(user);
  };

  const addPoints = async (req, res) => {
    const token = req.cookies.jwt;
    var id;
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not logged in." });
      } else {
        id = decodedToken.name;
      }
    });
    try {
      const user = await userModel.findById(id).exec();
        user.score = user.score + 10;
        await user.save();
        return res.status(200).send("10 points added successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while adding points.");
    }
  };

  const addtrophie = async (req, res) => {
    const token = req.cookies.jwt;
    var id;
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not logged in." });
      } else {
        id = decodedToken.name;
      }
    });
    try {
      const user = await userModel.findById(id).exec();
        user.trophie = true;
        await user.save();
        return res.status(200).send("You got the Spot The Phishing Email Champion Badge");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while submitting");
    }
  };

  const getTrophie = async (req, res) => {
    const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
    let userId;

    // Verify the token and extract the user ID
    jwt.verify(token, "supersecret", (err, decodedToken) => {
        if (err) {
            res.status(401).json({ hasTrophie: false });
        } else {
            userId = decodedToken.name;  // The payload should contain the user ID as 'name'
        }
    });

    if (!userId) return; // Exit if userId wasn't set

    try {
        const user = await userModel.findById(userId).exec();
        // Return true if the user has the 'trophie' property set to true, otherwise false
        const hasTrophie = user ? !!user.trophie : false;
        res.status(200).json({ hasTrophie });
    } catch (error) {
        console.error(error);
        res.status(500).json({ hasTrophie: false });
    }
};

  const addspot100 = async (req, res) => {
    const token = req.cookies.jwt;
    var id;
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not logged in." });
      } else {
        id = decodedToken.name;
      }
    });
    try {
      const user = await userModel.findById(id).exec();
        user.Spot100 = true;
        await user.save();
        return res.status(200).send("You got the Spot The Phishing Email 100% Correct Badge");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while adding points.");
    }
  };

  const getspot100 = async (req, res) => {
    const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
    let userId;

    // Verify the token and extract the user ID
    jwt.verify(token, "supersecret", (err, decodedToken) => {
        if (err) {
            res.status(401).json({ hasSpot100: false });
        } else {
            userId = decodedToken.name;  // The payload should contain the user ID as 'name'
        }
    });

    if (!userId) return; // Exit if userId wasn't set

    try {
        const user = await userModel.findById(userId).exec();
        // Return true if the user has the 'trophie' property set to true, otherwise false
        const hasSpot100 = user ? !!user.Spot100 : false;
        res.status(200).json({ hasSpot100 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ hasSpot100: false });
    }
};

  const addstar = async (req, res) => {
    const token = req.cookies.jwt;
    var id;
    jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "You are not logged in." });
      } else {
        id = decodedToken.name;
      }
    });
    try {
      const user = await userModel.findById(id).exec();
        user.star = true;
        await user.save();
        return res.status(200).send("You got the Phishing Quiz Champion Badge");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while adding points.");
    }
  };

  const getstar = async (req, res) => {
    const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
    let userId;

    // Verify the token and extract the user ID
    jwt.verify(token, "supersecret", (err, decodedToken) => {
        if (err) {
            res.status(401).json({ hasstar: false });
        } else {
            userId = decodedToken.name;  // The payload should contain the user ID as 'name'
        }
    });

    if (!userId) return; // Exit if userId wasn't set

    try {
        const user = await userModel.findById(userId).exec();
        // Return true if the user has the 'trophie' property set to true, otherwise false
        const hasstar = user ? !!user.star : false;
        res.status(200).json({ hasstar });
    } catch (error) {
        console.error(error);
        res.status(500).json({ hasstar: false });
    }
};

const addquiz100 = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "You are not logged in." });
    } else {
      id = decodedToken.name;
    }
  });
  try {
    const user = await userModel.findById(id).exec();
      user.quiz100 = true;
      await user.save();
      return res.status(200).send("You got the Phishing Quiz 100% Correct Badge");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding points.");
  }
};

const getquiz100 = async (req, res) => {
  const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
  let userId;

  // Verify the token and extract the user ID
  jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
          res.status(401).json({ hasquiz100: false });
      } else {
          userId = decodedToken.name;  // The payload should contain the user ID as 'name'
      }
  });

  if (!userId) return; // Exit if userId wasn't set

  try {
      const user = await userModel.findById(userId).exec();
      // Return true if the user has the 'trophie' property set to true, otherwise false
      const hasquiz100 = user ? !!user.quiz100 : false;
      res.status(200).json({ hasquiz100 });
  } catch (error) {
      console.error(error);
      res.status(500).json({ hasquiz100: false });
  }
};

const getTopThreeUsers = async (req, res) => {
  try {
      const users = await userModel.find()
          .sort({ score: -1 })  // Sort users by score in descending order
          .limit(3);        // Limit to the top three users
      if (users.length < 3) {
          return res.status(404).send({ message: 'Less than three users are available.' });
      }

      res.status(200).send(users);
  } catch (error) {
      console.error('Error fetching top three users:', error);
      res.status(500).send({ message: 'Failed to retrieve top three users.' });
  }
};

const setTop3 = async (req, res) => {
  try {
      const users = await userModel.find().sort({ score: -1 }).limit(3);
      users.forEach(async (user, index) => {
          switch (index) {
              case 0:
                  await userModel.updateOne({ _id: user._id }, { $set: { first: true} });
                  break;
              case 1:
                  await userModel.updateOne({ _id: user._id }, { $set: { second: true } });
                  break;
              case 2:
                  await userModel.updateOne({ _id: user._id }, { $set: { third: true } });
                  break;
          }
      });

      res.status(500).send(users)
  } catch (error) {
      res.status(500).send({ message: 'Failed' });
  }
};


const getfirst = async (req, res) => {
  const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
  let userId;

  // Verify the token and extract the user ID
  jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
          res.status(401).json({ hasfirst: false });
      } else {
          userId = decodedToken.name;  // The payload should contain the user ID as 'name'
      }
  });

  if (!userId) return; // Exit if userId wasn't set

  try {
      const user = await userModel.findById(userId).exec();
      // Return true if the user has the 'trophie' property set to true, otherwise false
      const hasfirst = user ? !!user.first : false;
      res.status(200).json({ hasfirst });
  } catch (error) {
      console.error(error);
      res.status(500).json({ hasfirst: false });
  }
};

const getsecond = async (req, res) => {
  const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
  let userId;

  // Verify the token and extract the user ID
  jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
          res.status(401).json({ hassecond: false });
      } else {
          userId = decodedToken.name;  // The payload should contain the user ID as 'name'
      }
  });

  if (!userId) return; // Exit if userId wasn't set

  try {
      const user = await userModel.findById(userId).exec();
      // Return true if the user has the 'trophie' property set to true, otherwise false
      const hassecond = user ? !!user.second : false;
      res.status(200).json({ hassecond });
  } catch (error) {
      console.error(error);
      res.status(500).json({ hassecond: false });
  }
};

const getthird = async (req, res) => {
  const token = req.cookies.jwt;  // Assuming the JWT token is stored in cookies
  let userId;

  // Verify the token and extract the user ID
  jwt.verify(token, "supersecret", (err, decodedToken) => {
      if (err) {
          res.status(401).json({ hasthird: false });
      } else {
          userId = decodedToken.name;  // The payload should contain the user ID as 'name'
      }
  });

  if (!userId) return; // Exit if userId wasn't set

  try {
      const user = await userModel.findById(userId).exec();
      // Return true if the user has the 'trophie' property set to true, otherwise false
      const hasthird = user ? !!user.third : false;
      res.status(200).json({ hasthird });
  } catch (error) {
      console.error(error);
      res.status(500).json({ hasthird: false });
  }
};

module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login,
    logout,
    getProfile,
    addPoints,
    addtrophie,
    getTrophie,
    addspot100,
    getspot100,
    addstar,
    getstar,
    addquiz100,
    getquiz100,
    getTopThreeUsers,
    getfirst,
    getsecond,
    getthird,
    setTop3,
}