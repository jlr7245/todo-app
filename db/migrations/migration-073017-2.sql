--\c todo_dev

ALTER TABLE todos 
ADD COLUMN completed BOOLEAN;

UPDATE todos SET completed = FALSE;