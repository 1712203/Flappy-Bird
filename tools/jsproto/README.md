# JS-PROTO tool

Used to generate protocol file (Response and Request) from proto file

## Requirements

- Nodejs

## How to use

- Step #1: config `outputDirPath` in scripts/config.js

- Step #2: Run `export.bat` to export protocol file to src folder

## Directory tree

    .
    ├── jsproto                                 # Tool folder
    |   ├── define                              # Define object proto folder
    |       ├── DefineFile.js                   # Define file support for proto file
    |   ├── proto                               # Folder keep proto file
    |       ├── module                          # Module folder (check example folder)
    |           ├── requests                    # Request proto folder (check example folder)
    |               ├── RequestProto.js         # Request proto file (check example folder)
    |           ├── responses                   # Response proto folder (check example folder)
    |               ├── ResponseProto.js        # Response proto file (check example folder)
    |   ├── example                             # Example folder
    |   ├── scripts                             # Scripts folder
    |   ├── template                            # Template folder
    |   ├── export.bat                          # Export file
    |   ├── README.md