{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShell {
  buildInputs = with pkgs; [
    ffmpeg
    nodejs
  ];

  shellHook = '''';
}
