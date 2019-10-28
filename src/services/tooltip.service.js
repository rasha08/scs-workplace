export const getTooltipMessage = type => {
  switch (type) {
    case 'moveBack':
      return 'Move task to a previous column';
    case 'assign':
      return 'Assing yourself to this task';
    case 'block':
      return 'Mark this task as blocked';
    case 'review':
      return 'Assing yourself as a reviewer of this task';
    case 'moveForward':
      return 'Move task to next column';
    case 'projects':
      return 'See all your projects list';
    case 'editProject':
      return 'Edit current project';
    case 'specification':
      return 'Open project SPECIFICATION';
    case 'backlog':
      return 'Open project BACKLOG';
    case 'previousSprints':
      return 'Show PREVIOUS SPRINTS';
    case 'notes':
      return 'Show project NOTES';
    case 'goals':
      return 'Show only tasks that are in SPRINT GOALS';
    case 'highPriority':
      return 'Show only tasks that are HIGH PRIORITY';
    case 'assigner':
      return 'Show only tasks that you are ASSIGNED ON';
    case 'reviewer':
      return 'Show only tasks that you are assigned as REVIEWER';
    case 'closeSprint':
      return 'CLOSE CURRENT SPRINT AND START NEW ONE';
    case 'addTask':
      return 'Create new task in current sprint';
    default:
      return ''
  }
};