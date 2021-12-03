const router = require("express").Router();
const Order= require("../models/Order");

const {
  checkToken,
  checkTokenAndAuthorization,
  checkTokenAndAdmin,
} = require("./verifyToken");

// Create Order Information

router.post("/", checkToken, async (req,res)=>{
const newOrder = new Order(req.body)

try{
const savedOrder = await newOrder.save()
res.status(200).json(savedOrder)

}catch(err){
    res.status(500).json(err)
}

});
// //UPDATE
router.put("/:id", checkTokenAndAdmin, async (req, res) => {


  try {
    const updatedOrder= await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //DELETE
router.delete("/:id", checkTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("This order has been deleted..");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //Gather User Order information
router.get("/find/:userId",checkTokenAndAuthorization, async (req, res) => {
  try {
    const orders= await Order.find({userId: req.params.userId});
    const { password, ...others } = user._doc;
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Grab all cart information
router.get("/",checkTokenAndAdmin, async (req,res) =>{

    try{
        const orders = await Order.find()
        res.status(200).json(orders)
        
    }catch(err){
        res.status(500).json(err)
    }
});

//Analytics information for each monthly income

router.get("/income", checkTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try{
        const income = await Order.aggregate([
            { $match:{ createdAt: { $gte: previousMonth } } },
            {
                $project:{
                    month: {$month: "$createdAt"},
                    sales:"$amount"
                },
            },
            {
              $group:{
                _id:"$month",
                total :{$sum:"$sales"}
              }
            }
        ]);
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;