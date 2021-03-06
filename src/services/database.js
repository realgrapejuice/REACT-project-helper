import { firebaseDatabase } from "./reset_firebase";

class Database {
  write(userId, project) {
    firebaseDatabase.ref(`${userId}/users/${project.id}`).set(project);
  }

  read(userId, onUpdate) {
    const cardRef = firebaseDatabase.ref(`${userId}/users`);
    cardRef.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => cardRef.off();
  }

  readProject(userId, onUpdate, id) {
    const careRef = firebaseDatabase.ref(`${userId}/users/${id}`);
    careRef.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => careRef.off();
  }

  update(userId, project, todo) {
    firebaseDatabase.ref(`${userId}/users/${project.id}`).update({
      todo: todo,
    });
  }

  delete(userId, project) {
    firebaseDatabase.ref(`${userId}/users/${project.id}`).remove();
  }
}

export default Database;
