// sliderValidation.js
exports.validateSliderInput = (req, res, next) => {
    const { title } = req.body;
  
    // Validate the title
    if (!title || title.length < 3 || title.length > 100) {
      return res.status(400).json({
        message: "Title must be between 3 and 100 characters."
      });
    }
  
    next();  // Proceed to the controller if validation passes
  };
  