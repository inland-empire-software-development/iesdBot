const removeTeam = (payload, db) => {
  return db.deleteOne({ teamMembers: payload.user.id }, (err) => {
    if(err) return console.log(err);
    console.log('successfully deleted');
  });
}

module.exports = removeTeam;