<?php defined('BASEPATH') or
    exit('No direct script access allowed');
class Tache extends CI_Model
{
    public function getrecenttask($iduser)
    {
        $obj = array();
        $query = "select * from tache where iduser= %s order by idtache desc limit 5";
        $result = $this->db->query(sprintf($query, $iduser));
        foreach ($result->result_array() as $row) {
            array_push($obj, $row);
        }
        return $obj;
    }
    public function getsoustachebytache($idtache)
    {
        $obj = array();
        $query = "select * from sous_tache where idtache = %s ";
        $result = $this->db->query(sprintf($query, $idtache));
        foreach ($result->result_array() as $row) {
            array_push($obj, $row);
        }
        return $obj;
    }
    public function insertionsoustache($soustaches, $id)
    {

        foreach ($soustaches as $soustache) {
            $data = array('nom' => $soustache->nom, 'idtache' => $id, 'details' => $soustache->details, 'debut' => $soustache->debut, 'estimation' => $soustache->estimation);
            $str = $this->db->insert('sous_tache', $data);
        }


    }
    public function insertiontache($tache, $id)
    {
        $data = array('nom' => $tache->nom, 'iduser' => $id, 'details' => $tache->details, 'couleur' => $tache->couleur, 'categorie' => $tache->categorie, 'idstatus' => $tache->idstatus);
        $str = $this->db->insert('tache', $data);
        
       $query =  $this->db->query('select max(idtache) as id from tache ');
        $row = $query->row();
        return $row->id;
    }

    public function insertionimage($id, $path)
    {
        $data = array('idtache' => $id, 'pic' => $path);
        $str = $this->db->insert('pic', $data);
    }

}