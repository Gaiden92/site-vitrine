<?php /**
 * Fonction pour ajouter un message flash
 * @param string 
 * @param string 
 * @return void
 */
function alertMessage(string $type, string $message) : void
{
  
    $_SESSION['flash'][] = [
        'type' => $type,
        'message' => $message,
    ];
}

/**
 * Fonction pour récupérer les messages flash
 * @return array
 */

function recupereralerteMessage() : array
{  
    $messages = $_SESSION['flash'] ?? [];    
    unset($_SESSION['flash']);
    return $messages;
}