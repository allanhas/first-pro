const port=3000
const {db}= require('./lib/index')
const {models}=require('./lib/db')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('jsonwebtoken')

