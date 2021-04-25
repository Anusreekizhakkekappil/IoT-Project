async function main() {
    const MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    const client = new MongoClient(uri, { useNewUrlParser: true });

    // Connect to the client and query
    await client.connect();
    findListings(client, 5);
    client.close();
}

//insert data

MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("patient_details");
            var myobj = { name: "sam", address: "diabetes" };
            dbo.collection("patient").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
            });

            async function findListings(client, resultsLimit) {
                const cursor = client
                    .db('patient_details')
                    .collection('listingsAndReviews')
                    .find()
                    .limit(resultsLimit);

                const results = await cursor.toArray();
                if (results.length > 0) {
                    console.log(`Found ${results.length} listing(s):`);
                    results.forEach((result, i) => {
                        date = new Date(result.last_review).toDateString();

                        console.log();
                        console.log('connected');
                        console.log(
                            `   most recent review date: ${new Date(
            result.last_review
          ).toDateString()}`
                        );
                    });
                }
            }