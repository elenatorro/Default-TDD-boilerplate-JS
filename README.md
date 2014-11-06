#Default TDD boilerplate

###Default folder structure for doing TDD excercises with CoffeeScript, Mocha and Should.

##Instructions

1. Clone the repository

```
$ git clone https://github.com/elenatorro/Default-TDD-boilerplate.git

$ cd Default-TDD-boilerplate
```
2. Install node modules

```
$ npm install
```

**Note**: you will need to install the missing packages.

3. Run the default test

```
$ npm test
```

##Structure

```
lib/DefaultObject.coffee
```

Create your objects following this object structure. Don't forget to export it at the end.

```
test/test.coffee
```
Here is where you have to write your test. 'Describe' is used to group a sort of unit test that test the same field.

Don't forget to require the default object at the beginning of the file.
