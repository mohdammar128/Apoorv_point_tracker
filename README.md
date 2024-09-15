### Description

A UPI-like app made for IIIT Kottayam's Techno Cultural Fest, Apoorv.

This is the backend for the App, the frontend can be found [here](https://github.com/siddharthO3/Apoorv-App).



### Requirements

- node js version v20.11.0
- mongoDB client
- mongosh

### Set Up

1. Go to program files --> MongoDB-->server--->bin Copy bin path and add it in enviornment feild
2. Open Configuration file (mongo.config)
   set folowing

-        replication:
               replSetName: rs0

3. open mongosh using command **mongosh**

- use folowing command

```bash
use admin
mongod --port 27017 --replSet rs0 --dbpath="C:\[give a folder name]\db0"
rs.initiate()
```

4.  In the Root folder create **.env** file and **serviceAccountKey.json** file (paste the credentials that you have created using firebase ,(make sure create service Account credentials) )
5.  Inside .env file paste this **\*MONGO_URL=mongodb://localhost:27017/apoorv?replicaSet=rs0**

### After the above setup let

- Run **npm init**
- **npm start**

## Team
<table align='center'>
    <tr align="center">
        <td><a href="https://github.com/welf06"><img src="https://avatars.githubusercontent.com/u/85446331?s=40&v=4" height="35" width="35" alt="Ganesh Nathan"></a></td>
        <td><a href="https://github.com/mohdammar128"><img src="https://avatars.githubusercontent.com/u/96827436?s=16&v=4" height="35" width="35" alt="Mohd Ammar"></a></td>
        <td><a href="https://github.com/thennal10"><img src="https://avatars.githubusercontent.com/u/49022771?s=16&v=4" height="35" width="35" alt="Thennal DK"></a></td>
    </tr>
    <tr>
        <td><a href="https://github.com/siddharthO3">Ganesh Nathan</a></td>
        <td><a href="https://github.com/Aditya8047">Mohd Ammar</a></td>
        <td><a href="https://github.com/mdjaas">Thennal DK</a></td>
    </tr>
</table>
