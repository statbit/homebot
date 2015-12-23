module.exports = function(robot) {
  robot.hear(/turn on home audio/i, function (res) {
    var call = robot.http("http://localhost:8080/main/all_on_itunes").post({})(function(err, result, body) {
      if(err) {
        res.send("oops -- something went wrong.");
      } else {
        res.send("enjoy the tunes");
      }
    });
  });

  robot.hear(/turn off home audio/i, function (res) {
    var call = robot.http("http://localhost:8080/main/off").post({})(function(err, result, body) {
      if(err) {
        res.send("oops -- something went wrong.");
      } else {
        res.send("ahh. peas and quiet!");
      }
    });
  });
};
