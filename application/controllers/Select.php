<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Select extends CI_Controller
{
    public function getallcategories()
    {
        $data = $this->Categorie->getallcategories();
        echo json_encode($data);
    }
    public function getrecenttask()
    {
        $data = $this->Tache->getrecenttask($this->session->userdata("iduser"));
        foreach ($data as $task) {
            $task['sousTaches'] = $this->Tache->getsoustachebytache($task['idtache']);
        }
        echo json_encode($data);
    }

}