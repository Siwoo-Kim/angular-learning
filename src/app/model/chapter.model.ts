

export class Chapter {
  constructor(public title: string,
              public description?: string,
              public childs?: Chapter[]) {}
}
