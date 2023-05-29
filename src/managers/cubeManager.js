const uniqid = require('uniqid');

const cubes = [
    {
        id: '1nbo9fozli8rf0ud',
        name: 'Mirror Cube',
        description: 'Light Reflecting Cube!',
        imageUrl: 'https://cdn.wallpapersafari.com/91/59/TGQejB.jpg',
        difficultyLevel: 4
    },

    {
        id: '1nbo9fozli8rf0ud',
        name: 'Rubic Classic Cube',
        description: 'Evergreen Cube!',
        imageUrl: 'https://img2.cgtrader.com/items/642213/847af60587/rubic-cube-3d-model-max-obj-mtl-3ds-fbx-dxf.jpg',
        difficultyLevel: 3
    }

];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);



exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};