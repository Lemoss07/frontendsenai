<?php
$host = 'localhost';
$user = 'root';
$senha = '';
$bd = 'sistema';
$conexao = new mysqli($host,$user,$senha,$bd);
//verificar conexao
if ($conexao -> connect_error){
    echo "deu ruim";
}else{
    echo "deu bom";
}
?>