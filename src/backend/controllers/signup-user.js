const User = require("../model/user");

async function SignUpUser(req, res) {
  let result;
  try {
    const requestBody = req.body;
    const { email,fullname, password } = requestBody;
    if (email !== null && password !== null) {
      result = await User.create({
        fullname: fullname,
        email: email,
        password: password,
        medicalInfo: "",
        allergy: "",
        address: "",
        phone: "",
      });
      if (result) {
        res.status(200).json({
          success: true,
          message: "User logged in successfully",
          data: res,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to log in user",
        });
      }
    }
  } catch (error) {
    console.log("Error: ", error);
    result = "failed to login user";
  }
  return result;
}

//export function
module.exports = SignUpUser;
