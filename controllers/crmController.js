const Router = require('express').Router;
const router = Router();
const Contact = require('../models/crmModel');

router.get('/', (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
});

router.post('/', (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
});

router.get('/:contactID', (req, res) => {
  Contact.findById(req.params.contactID, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
});

router.put('/:contactID', (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
});

router.delete('/:contactID', (req, res) => {
  Contact.remove({ _id: req.params.contactID }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'successfuly deleted contact' });
  });
});

module.exports = router;
