<?php
require 'flight/Flight.php';
include 'sparrow.php';

Flight::register('db', 'Sparrow', array(),
    function ($db) {
        $db->setDb('mysql://root:root@localhost/notes');
    }
);

/**
 * @api {get} /users Get all users
 * @apiGroup User
 */
Flight::route('GET /users', function () {
    Flight::json(
        Flight::db()->from('user')
            ->select()
            ->many()
    );
});

/**
 * @api {get} /users/:id Get user by id
 * @apiGroup User
 * @apiParam {Number} id User's unique ID.
 */
Flight::route('GET /users/@id', function ($id) {
    Flight::json(
        Flight::db()->from('user')
            ->where('id', $id)
            ->select()
            ->one()
    );
});

/**
 * @api {post} /users Create new user
 * @apiGroup User
 * @apiParam {Number} first_name User's first name.
 * @apiParam {Number} last_name User's last name.
 * @apiParam {Number} username User's username.
 * @apiParam {Number} password User's password.
 */
Flight::route('POST /users', function () {
    $first_name = Flight::request()->data['first_name'];
    $last_name = Flight::request()->data['last_name'];
    $username = Flight::request()->data['username'];
    $password = Flight::request()->data['password'];

    $result =
        Flight::db()->from('user')
            ->insert(array(
                'first_name' => $first_name,
                'last_name' => $last_name,
                'username' => $username,
                'password' => $password,
            ))
            ->execute();

    if ($result)
        Flight::json(array('error' => false));
    else
        Flight::json(array('error' => true), 500);
});

Flight::start();