
# Routes Revenue Report Generation API
This is an interview test question. @ulhaqwahaj@gmail.com.

## Installation
To get started with this project, you'll need to have Node.js and MongoDB installed on your machine.

- Run npm install to install the necessary dependencies.
- Run nodemon start to start the API.
- The API should now be accessible at http://localhost:3000.

make sure nodemon was installed in your system globally.

## Usage
## To Run API (/revenue-report/get/all)
To generate revenue report of routes, make a GET request to /revenue-report/get/all with the following JSON payload:
```
{
    "data":
    [
        {
            data here ...
        },
        ...n
    ]
}
```
Example:
```
GET /revenue-report/get/all
{
"data": [
{
"id": 93665,
"routeName": "C-4GWP",
"status": "Completed",
"scheduledStart": "2022-07-06T10:26:00.000Z",
"actualStart": "2022-07-06T07:43:28.000Z",
"estimatedEnd": "2022-07-06T10:41:00.000Z",
"actualEnd": "2022-07-06T07:48:50.000Z",
"vehicle": {
"id": 234,
"name": "Vehicle # 1",
"costPrice": 400, 
"sellingPrice": 500 
},
"driverName": "dev.driver",
"orgName": "Dev Team"
},
{
"id": 93672,
"routeName": "C-4GWX",
"status": "Scheduled",
"scheduledStart": "2022-07-06T07:53:00.000Z",
"actualStart": null,
"estimatedEnd": "2022-07-06T08:20:00.000Z",
"actualEnd": null,
"vehicle": {
"id": 234,
"name": "Vehicle # 1",
"costPrice": 400,
"sellingPrice": 500
},
"driverName": "dev.driver",
"orgName": "Dev Team"
},
{
"id": 93669,
"routeName": "C-4GWU",
"status": "Completed",
"scheduledStart": "2022-07-06T06:53:00.000Z",
"actualStart": "2022-07-06T06:22:32.000Z",
"estimatedEnd": "2022-07-06T07:04:00.000Z",
"actualEnd": "2022-07-06T06:23:17.000Z",
"vehicle": {
"id": 234,
"name": "Vehicle # 1",
"costPrice": 400,
"sellingPrice": 500
},
"driverName": "dev.driver",
"orgName": "Dev Team"
},
{
"id": 93659,
"routeName": "C-4GWJ",
"status": "Completed",
"scheduledStart": "2022-07-06T00:33:00.000Z",
"actualStart": "2022-07-05T15:05:18.000Z",
"estimatedEnd": "2022-07-06T00:44:00.000Z",
"actualEnd": "2022-07-05T15:13:49.000Z",
"vehicle": {
"id": 235,
"name": "Vehicle # 2",
"costPrice": 200,
"sellingPrice": 300
},
"driverName": "dev.driver",
"orgName": "Dev Team"
},
{
"id": 93649,
"routeName": "C-4GW8",
"status": "Completed",
"scheduledStart": "2022-07-06T16:44:00.000Z",
"actualStart": "2022-07-05T07:55:58.000Z",
"estimatedEnd": "2022-07-06T17:15:00.000Z",
"actualEnd": "2022-07-05T08:35:58.000Z",
"vehicle": {
"id": 235,
"name": "Vehicle # 2",
"costPrice": 200,
"sellingPrice": 300
},
"driverName": "Test Driver",
"orgName": "Dev Team"
},
{
"id": 93650,
"routeName": "C-4GW9",
"status": "Completed",
"scheduledStart": "2022-07-06T12:57:00.000Z",
"actualStart": "2022-07-05T07:55:39.000Z",
"estimatedEnd": "2022-07-06T13:18:00.000Z",
"actualEnd": "2022-07-05T08:32:39.000Z",
"vehicle": {
"id": 235,
"name": "Vehicle # 2",
"costPrice": 200,
"sellingPrice": 300
},
"driverName": "Test Driver",
"orgName": "Dev Team"
},
{
"id": 93648,
"routeName": "C-4GW7",
"status": "Completed",
"scheduledStart": "2022-07-06T11:00:00.000Z",
"actualStart": "2022-07-05T07:55:15.000Z",
"estimatedEnd": "2022-07-06T11:05:00.000Z",

"actualEnd": "2022-07-05T08:03:15.000Z",
"vehicle": {
"id": 235,
"name": "Vehicle # 2",
"costPrice": 200,
"sellingPrice": 300
},
"driverName": "Test Driver",
"orgName": "Dev Team"
},
{
"id": 93652,
"routeName": "C-4GWC",
"status": "Scheduled",
"scheduledStart": "2022-07-06T06:56:00.000Z",
"actualStart": null,
"estimatedEnd": "2022-07-06T07:05:00.000Z",
"actualEnd": null,
"vehicle": {
"id": 234,
"name": "Vehicle # 1",
"costPrice": 400,
"sellingPrice": 500
},
"driverName": "dev.driver",
"orgName": "Dev Team"
}
]
}
```
Response:
```
{
    "data": [
        {
            "name": "C-4GWP",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.08944444444444444,
            "hourlyCP": "400.00",
            "hourlySP": "500.00",
            "gpm": "0.20"
        },
        {
            "name": "C-4GWX",
            "organization": "Dev Team",
            "status": "Scheduled",
            "duration": 0.45,
            "hourlyCP": "333.68",
            "hourlySP": "417.10",
            "gpm": "0.20"
        },
        {
            "name": "C-4GWU",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.0125,
            "hourlyCP": "9.06",
            "hourlySP": "11.32",
            "gpm": "0.20"
        },
        {
            "name": "C-4GWJ",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.14194444444444446,
            "hourlyCP": "200.00",
            "hourlySP": "300.00",
            "gpm": "0.33"
        },
        {
            "name": "C-4GW8",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.6666666666666666,
            "hourlyCP": "164.89",
            "hourlySP": "247.34",
            "gpm": "0.33"
        },
        {
            "name": "C-4GW9",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.6166666666666667,
            "hourlyCP": "86.53",
            "hourlySP": "129.80",
            "gpm": "0.33"
        },
        {
            "name": "C-4GW7",
            "organization": "Dev Team",
            "status": "Completed",
            "duration": 0.13333333333333333,
            "hourlyCP": "17.11",
            "hourlySP": "25.66",
            "gpm": "0.33"
        },
        {
            "name": "C-4GWC",
            "organization": "Dev Team",
            "status": "Scheduled",
            "duration": 0.15,
            "hourlyCP": "85.48",
            "hourlySP": "106.85",
            "gpm": "0.20"
        }
    ],
    "message": "Revenue report generated"
}
```