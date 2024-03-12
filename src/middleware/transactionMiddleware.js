const User = require("../model/User")
const Transaction = require("../model/Transaction")

async function isItSameTransaction(req, res, next) {
  // console.log("isSameTrxn is called")
  const { from, to, amount, transactionType } = req.body;
  const force = req.query.force;
  // console.log(typeof (force))
  try {
    if (force !== null && force === "true") {
      console.log("move to next funtion")
      return next();
    }
    const response = await Transaction.findOne({ transactionType, from: from, to: to }).sort({ createdAt: -1 });
    // console.log(response.transactionValue,amount)
    if (response.transactionValue !== amount) {
      return next();
    }
  

    res.status(432).send({ cautious: "Do you want to repeat Transaction", sucess: true })

  } catch (error) {
    res.status(500).send({ error: "Failed to validate duplication !please try again", success: false });
  }

}

async function txnMiddleware(req, res, next) {
  // console.log(" txnMiddleware is called")
  try {
    const { from, to, amount } = req.body;
    const fromUser = await User.findOne({ uid: from });

    if (fromUser.points < amount) {
      return res.status(502).send({ error: "You have not Sufficient Points", success: false });
    }
    const toUser = await User.findOne({ uid: to });
    if (!toUser) {
      return res.status(404).send({ error: "User not found", success: false });
    }
    req.body["toName"] = toUser.fullName;
   req.body["fromName"]=fromUser.fullName;

    next();
  } catch (error) {
    res.status(500).send({ error: "Failed to validate transaction is possible ! please try again", success: false })
  }
}

module.exports = { txnMiddleware, isItSameTransaction };
