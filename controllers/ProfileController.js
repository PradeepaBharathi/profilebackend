import Users from "../model/usermodel.js";

export const getProfile = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    const { gender, education, age, DOB, contact } = req.body;
    
    const { id } = req.params;
    const user = await Users.findById(id);
    
    if(!user) {
        return res.status(404).json({ message: "User not found" });
      }


      const updatedUser = await Users.findByIdAndUpdate(
     id,
        { gender,education,age, DOB, contact },
        { new: true }
      )

    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
