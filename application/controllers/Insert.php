<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Insert extends CI_Controller
{
    public function inserttache()
    {
        $json = $_POST['task'];
        $data = json_decode($json);

        $id = $this->Tache->insertiontache($data, 1);
        foreach ($data->pics as $pic) {
            $this->Tache->insertionimage($id, $pic->picPath);
        }
        $this->Tache->insertionsoustache($data->sousTaches, $id);
    }


}