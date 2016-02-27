db.smalltweets.find({ twitterScreenName: 'NathanFillion', created_at_Date: {
  $gte: ISODate("2016-02-23T06:00:00.000Z"),
  $lt:  ISODate("2016-02-23T08:10:00.000Z")}}).sort({"created_at_Date":-1})
  $lt:  ISODate("2016-02-23T08:10:00.000Z")}}).sort({"created_at_Date":-1})

  db.smalltweets.find({ twitterScreenName: 'Jon_Huertas', created_at_Date: {
  $gte: ISODate("2016-02-23T06:00:00.000Z"),
  $lt:  ISODate("2016-02-23T07:10:00.000Z")}}).sort({"created_at_Date":-1})
