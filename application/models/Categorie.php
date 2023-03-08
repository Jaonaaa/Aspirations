<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Categorie extends CI_Model
{
    public function getallcategories()
    {
        $obj = array();
        $data = array('iduser' => 1);
        $query = $this->db->get_where('categorie', $data);
        foreach ($query->result_array() as $row) {
            array_push($obj, $row);
        }
        return $obj;
    }
}