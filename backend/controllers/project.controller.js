const Project = require('../models/Project');
exports.createProject = async (req, res) => {
  try {
    const project = new Project({
      userId: req.params.id,
      title: req.body.title,
      content: req.body.content,
    });
    await project.save();
    res.status(201).json({ message: '' });
  } catch (error) {
    res.status(500).send(error);
  }
};
