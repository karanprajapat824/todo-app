export default function Stats({stats}) {
  return (
    <div className="p-6 mb-6 bg-gradient-card shadow-soft border border-border/50 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground">{stats.total}</p>
          <p className="text-sm text-muted-foreground">Total Tasks</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-success">{stats.completed}</p>
          <p className="text-sm text-muted-foreground">Completed</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-yellow-300">{stats.pending}</p>
          <p className="text-sm text-muted-foreground">Pending</p>
        </div>
      </div>
    </div>
  );
}
