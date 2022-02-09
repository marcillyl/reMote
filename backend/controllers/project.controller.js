const Project = require('../models/Project');
exports.createProject = async (req, res) => {
  try {
    const project = new Project({
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
    });
    await project.save();
    res.status(201).json({ message: 'Project created!' });
  } catch (error) {
    res.status(500).send(error);
  }
};
