define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "group": "User",
    "version": "0.0.0",
    "filename": "Notes_API/api/v1/index.php",
    "groupTitle": "User",
    "name": "GetUsers"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get user by id",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Notes_API/api/v1/index.php",
    "groupTitle": "User",
    "name": "GetUsersId"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "Notes_API/api/v1/index.php",
    "groupTitle": "User",
    "name": "PostUsers"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "Notes_API/apidoc/main.js",
    "group": "_home_nakamoto_Project_PHP_Notes_API_apidoc_main_js",
    "groupTitle": "_home_nakamoto_Project_PHP_Notes_API_apidoc_main_js",
    "name": ""
  }
] });
