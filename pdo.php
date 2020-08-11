<?php

try{ 
    $pdo = new PDO ("mysql:host=localhost;dbname=mabdd;charset=utf-8", "user","mot de passe", array(PDO::MYSQL_ATTR_INIT_COMAND => "SET NAMES utf8"));
    }catch(Exception $e){
        die('Erreur: ' . $e->getMessage());
    }
?>