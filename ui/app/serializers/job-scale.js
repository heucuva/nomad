import ApplicationSerializer from './application';

export default class JobScale extends ApplicationSerializer {
  mapToArray = [{ apiName: 'TaskGroups', uiName: 'TaskGroupScales' }];

  normalize(modelClass, hash) {
    hash.PlainJobId = hash.JobID;
    hash.ID = JSON.stringify([hash.JobID, hash.Namespace || 'default']);
    hash.JobID = hash.ID;

    return super.normalize(modelClass, hash);
  }
}
