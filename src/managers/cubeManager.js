const uniqid = require('uniqid');

const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    const newCube = {
        //valid lines:
        // id: cubes[cubes.length - 1].id + 1,
        // ...cubeData,

        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};