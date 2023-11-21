const {body}=require("express-validator")


let USERdatavalidat=[
    body("firstName")
    .notEmpty().withMessage('First name is required. Please provide a First name.')
    .isString().withMessage('First name should contain only alphanumeric characters.')
    .isLength({ max: 15 }).withMessage('First name should be only 15 characters long.'),

    body("lastName")
    .notEmpty().withMessage('Last name is required. Please provide a last name.')
    .isString().withMessage('Last name should contain only alphanumeric characters.')
    .isLength({ max: 15 }).withMessage('Last name should be only 15 characters long.'),

    body("dateOfBirth")
    .notEmpty().withMessage('Please provide a date of birth')
    .isDate().withMessage('Please provide a valid date in ISO format (YYYY-MM-DD)'),

    body("mobileNumber").notEmpty().withMessage('Please provide a phone number')
    .isMobilePhone().withMessage('Please provide a valid mobile phone number').isLength({min:10,max:10}).withMessage('Mobile Numbar should be a 10 digit. please check Mobile Numbar'),

    body('address.street').notEmpty().withMessage('Please provide a street field').isAlpha(),
    body('address.city').notEmpty().withMessage('Please provide a city field').isAlpha(),
    body('address.state').notEmpty().withMessage('Please provide a state field').isAlpha(),
    body('address.country').notEmpty().withMessage('Please provide a country field').isAlpha(),

    body('emailId') 
    .notEmpty().withMessage('please provide a emailId')
    .isEmail().withMessage('please provide a valide email format') 
    .isLowercase().withMessage('Please provide the email address in lowercase format.'),

    body("password") .notEmpty().withMessage('Please provide a password'),
    body("confirmPassword").notEmpty().withMessage('please provide a confirmPassword'),
    
] 

//
PRODUCTdatavalidat=[
    body("productId")
    .notEmpty().withMessage('Product ID cannot be empty. It is required.')
    .isAlphanumeric().withMessage('Product ID must be an isAlphanumeric.')
    .isLength({ min: 5, max: 10 }).withMessage('Product ID must be between 5 and 10 characters.'),

    body("title")
    .notEmpty().withMessage('Title must be reqired. please provide a title')
    .isLength({ min: 5, max: 100 }).withMessage('Title must be between 5 and 100 characters.'),

    body("brand") 
    .notEmpty().withMessage('Please provide a brand name.')
    .isString().withMessage('Brand name must be a string.')
    .isLength({ min: 4, max: 10 }).withMessage('Brand name must be between 4 and 10 characters.'),

    body("price") 
    .notEmpty().withMessage('Please provide a price.')
    .isNumeric().withMessage('Price must be a numeric value.')
    .isFloat({ min: 0 }).withMessage('Price must be a positive number.')
    .isLength({ min: 2, max: 8 }).withMessage('Price must be between 2 and 8 characters in length'),


    body("discountedPrice") 
    .optional()
    .isNumeric().withMessage('Discounted price must be a numeric value.')
    .isFloat({ min: 0 }).withMessage('Discounted price must be a positive number.')
    .isLength({ min: 2, max: 7 }).withMessage('Discount Price must be between 2 and  characters in length'),


    body("rating")
    .optional()
    .isNumeric().withMessage('Rating must be a numeric value.')
    .isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5.'),

    body("specification.color")
    .notEmpty().withMessage('in specification,Color must not be empty.')
    .isLength({ min: 3, max: 9 }).withMessage('Color must be between 3 and 9 characters.')
    .isAlpha().withMessage('Color must contain only alphabetic characters.'),

    body("specification.size")
    .optional()
    .notEmpty().withMessage('please provide a product size. in a specification!')
    .isFloat({ min: 0, max: 10 }).withMessage('Size must be between 1 and 10 characters.'),

    body("specification.weight") 
    .notEmpty().withMessage('Please provide a weight. in a specification!')
    .matches(/^(\d+(\.\d+)?)(g|kg)$/).withMessage('Invalid weight format. Use "g" or "kg" suffix.')
    .isLength({ min: 1, max: 6 }).withMessage('Weight should be between 1 and 5 characters.'),

    body("offers")
    .isArray().withMessage('Offers must be an array.'),

    body("images")
    .notEmpty().withMessage('Please provide an image URL.')
    .isArray().withMessage('Images must be an array.')
    .isURL(),

    body("productDetails")
    .notEmpty().withMessage('Please provide product details.')
    .isObject().withMessage('Product details must be an object.')

]


    //
    const PRODCTreviews=[
    body('reviews.*.username')
        .notEmpty().withMessage('Mandatory username for giving reviews.')
        .isString().withMessage('Username must be a string.')
        .isAlpha().withMessage('Username must contain only alphabetic characters.')
        .isLength({ min: 3, max: 20 }).withMessage('Username must be between 3 and 20 characters.'),
    body("reviews.*.rating")
        .notEmpty().withMessage('Rating is required.')
        .isNumeric().withMessage('Rating must be a numeric value.')
        .isInt().withMessage('Rating must be an integer value.')
        .isFloat({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5.'),

    body("reviews.*.comment")
        .optional()
        .isString().withMessage('Comment must be a string.')
        .isLength({ max: 500 }).withMessage('Comment cannot exceed 500 characters.')
        .isAlphanumeric().withMessage('Comment must be alphanumeric.')

    ]


module.exports={USERdatavalidat,PRODUCTdatavalidat,PRODCTreviews} 
