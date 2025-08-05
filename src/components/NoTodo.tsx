export default function NoTodo() {
  return (
    <div className="p-12 my-8 text-center bg-gradient-card border border-border/50 rounded-xl">
      <div className="space-y-3">
        <p className="text-lg font-medium text-muted-foreground">
          No tasks yet. Add your first task above!
        </p>
        <p className="text-sm text-muted-foreground">
          Stay organized and boost your productivity
        </p>
      </div>
    </div>
  );
}
