<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
    public function index()
    {
        $this->load->view('Login');
    }

    public function goHome()
    {
        $this->load->view('Home');
    }

}