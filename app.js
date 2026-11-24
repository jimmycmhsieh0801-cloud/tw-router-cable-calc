function calcNetwork(mbps, ping, wallTier = 1) {
  const m = Math.max(1, Number(mbps) || 100);
  const p = Math.max(5, Number(ping) || 20);
  const w = Number(wallTier) || 1;
  const realMBs = Math.round((m / 8) * 0.9 * 10) / 10;
  const cable = m >= 1000 ? "Cat.6A (支援 10G 抗干擾)" : m >= 300 ? "Cat.6 以上純銅 8 芯" : "Cat.5e / Cat.6";
  let mesh = 1;
  if (w === 3 || p > 45) mesh = 3;
  else if (w === 2 || p > 25) mesh = 2;
  return { realMBs, cable, mesh };
}
if (typeof document !== "undefined") {
  const ids = ["mbpsInput", "homePing", "floorsInput"];
  function render() {
    const [m, p, w] = ids.map(id => document.getElementById(id).value);
    const res = calcNetwork(m, p, w);
    document.getElementById("mbpsRealEl").textContent = `約 ${res.realMBs} MB/s`;
    document.getElementById("cableEl").textContent = res.cable;
    document.getElementById("meshEl").textContent = `建議 ${res.mesh} 顆組`;
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcNetwork };