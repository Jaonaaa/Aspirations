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
        //$id = $this->db->select_max('idtache');
        // $id = $this->db->get('tache');
        $sql = "SELECT MAX(idTache) as idMax FROM Tache";
        $query = $this->db->query($sql);
        $row = $query->row_array();
        return $row['idmax'];

    }

    public function insertionimage($id, $path)
    {
        $data = array('idtache' => $id, 'pic' => $path);
        $str = $this->db->insert('pic', $data);
    }
    public function getfirsttache(){
        $obj = array();
        $query = "select * from sous_tache where idtache = %s order by idsous_tache asc limit 1";
        $result = $this->db->query(sprintf($query, $idtache));
        $row= $result->row()
        return $row;
    }
    public function getlasttache(){
        $obj = array();
        $query = "select * from sous_tache where idtache = %s order by idsous_tache desc limit 1";
        $result = $this->db->query(sprintf($query, $idtache));
        $row= $result->row()
        return $row;
    }

    public function getAllTaches($idUser)
    {
        $sql = "SELECT * from tache WHERE tache.iduser = %s ORDER BY idTache DESC LIMIT 10";
        $sql = sprintf($sql, $this->db->escape($idUser));
        $query = $this->db->query($sql);

        $array = array();
        foreach ($query->result_array() as $row) {
            $objets = array();
            $objets['idtache'] = $row['idtache'];
            $objets["nom"] = $row["nom"];
            $objets["details"] = $row["details"];
            $objets['couleur'] = $row['couleur'];
            $objets["categorie"] = $row['categorie'];
            $objets["importance"] = $row['idstatus'];
            $objets['sous_tache'] = $this->getsoustachebytache($row['idtache']);
            $objets['etat'] = $row['etat'];
            $objets["pics"] = $this->getPicByTache($row["idtache"]);
            array_push($array, $objets);
        }
        return $array;
    }

    public function getPicByTache($idtache)
    {
        $obj = array();
        $query = "select * from pic where idtache = %s ";
        $result = $this->db->query(sprintf($query, $idtache));
        foreach ($result->result_array() as $row) {
            array_push($obj, $row);
        }
        return $obj;

    }

}