const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private route
const getGoals = asyncHandler( async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

// @desc Set goal
// @route POST /api/goal
// @access Private route
const setGoal = asyncHandler( async (req, res) => {
  console.log(req.body)

  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }

  res.status(200).json({ msg: 'Set goal' })
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private route
const updateGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ msg: `Update now goal ${req.params.id}` })
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private route
const deleteGoal = asyncHandler( async (req, res) => {
  res.status(200).json({ msg: `Delete goal ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}
