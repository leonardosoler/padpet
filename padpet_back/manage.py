#!/usr/bin/env python
import os
import sys
import debugpy

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "padpet_back.settings")

    from django.core.management import execute_from_command_line
    from django.conf import settings
    # Codigo para debug usando o vs code
    print("Starting Debug ...")

    if ( os.environ.get("RUN_MAIN", True) or os.environ.get("WERKZEUG_RUN_MAIN", True)):

        try:
            print("Starting Debug ...")
            debugpy.listen(('0.0.0.0', 5678))
            print("Debug STARTED...")
            print("Debug attached to port 5678")
        except Exception as e:
            print("Port 5678 already in use? Check .vscode/launch.json. Error:")
            print(e)
    else:
        print("Debugger already running?")
    execute_from_command_line(sys.argv)
