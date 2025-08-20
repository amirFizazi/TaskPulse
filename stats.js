function updateStats() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const notDone = total - done;

  document.getElementById("doneCount").textContent = done;
  document.getElementById("notDoneCount").textContent = notDone;
  document.getElementById("progress").textContent = 
    total > 0 ? Math.round((done / total) * 100) + "%" : "0%";
}

// يحدث كل ثانية لايف
setInterval(updateStats, 1000);
updateStats();