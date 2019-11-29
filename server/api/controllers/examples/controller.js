import ExamplesService from '../../services/examples.service';
export class Controller {
  all(req, res) {
    ExamplesService
    .all()
    .then(r => res.json(r));
  }

  create(req, res) {
    ExamplesService
      .create(req.body.name)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r))
  } 
}
export default new Controller();

// Is the export default new … pattern valid at all?
//     No, it's an antipattern for the reasons outlined above. Given the class is used nowhere else, ' +
// 'it's quite similar to the anonymous class antipattern. And exporting multiple named
// exports is much better than default-exporting objects anyway.