window.onload = function() {
  const roots = root.children,
  tb = chart.getElementsByTagName('tbody')[0],
  notes = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B',],
  chords = [
  ['Maj7',   [0,4,7,11], [11,9,6,4,2]],
  ['6',      [0,4,7,9],  [11,9,6,4,2]],
  ['m7',     [0,3,7,10], [10,9,5,3,2]],
  ['mMaj7',  [0,3,7,11], [11,9,5,3,2]],
  ['m6',     [0,3,7,9],  [11,9,5,3,2]],
  ['V7',     [0,4,7,10], [10,9,8,6,4,3,2,1]],
  ['V7sus',  [0,5,7,10], [10,9,8,5,4,3,2,1]],
  ['V7+',    [0,4,8,10], [10,9,8,6,4,3,2,1]], 
  ['Maj7+',  [0,4,8,11], [11,8,6,4,2]],
  ['m7b5',   [0,3,6,10], [10,8,6,5,3,2]],
  ['dim',    [0,3,6],    [11,9,8,6,5,3,2]],
  ];

  chords.forEach(function (chord) {
    var row = tb.insertRow(tb.rows.length);
    notes.forEach(function (note, i) {
      var cell = row.insertCell(i);
      if (i == 0 || i == 5) {
        cell.classList = "weak";
      } else if (chord[2].indexOf(12 - i) === -1) {
        cell.classList = "not";
      }
      cell.appendChild(document.createTextNode(chord[0]));
    });
  });

  melody.addEventListener('change', function () {
    var index = notes.indexOf(this.value);
    for (var l = 0; l < 12; l++) {
      var note = index + l;
      note = note > 11 ? note - 12 : note;
      roots[l].innerHTML = notes[note];
    }
  });

  notes.forEach(function (note) {
    var option = document.createElement("option");
    option.text = option.value = note;
    melody.appendChild(option);
  });
}