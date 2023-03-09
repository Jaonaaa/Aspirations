<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Update extends CI_Controller
{
    public function endoftache($json){
        $data = json_decode($json);
        $this->tache->endofsoustask($data->id);
    }
}