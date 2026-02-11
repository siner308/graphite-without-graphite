// Stack result formatter

function formatStackTable(results) {
  const header = '| Branch | PR | Status |\n|--------|-----|--------|';
  const rows = results.map(r => `| \`${r.branch}\` | #${r.pr} | ${r.status} |`);
  return [header, ...rows].join('\n');
}

module.exports = { formatStackTable };
