const MoveCamera = (entities, {screen}) => {
  const entitiesToUpdate = Object.values(entities).filter(
    (entity) => !entity.isCameraFollowing,
  );

  const backgroundEntitiesToUpdate = entitiesToUpdate.filter(
    (entity) => entity.zIndex === -1,
  );

  const foregroundEntitiesToUpdate = entitiesToUpdate.filter(
    (entity) => entity.zIndex === 1,
  );

  const midgroundEntitiesToUpdate = entitiesToUpdate.filter(
    (entity) => entity.zIndex === 0,
  );

  backgroundEntitiesToUpdate.forEach((entity) => {
    entity.position = [entity.position[0] - 1, entity.position[1]];
  });

  foregroundEntitiesToUpdate.forEach((entity) => {
    entity.position = [entity.position[0] - 3, entity.position[1]];
  });

  midgroundEntitiesToUpdate.forEach((entity) => {
    entity.position = [entity.position[0] - 2, entity.position[1]];
  });

  return entities;
};

export {MoveCamera};
