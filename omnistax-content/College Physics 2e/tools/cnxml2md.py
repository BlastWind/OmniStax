#!/usr/bin/env python3
import os, sys; os.execv(sys.executable, [sys.executable, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "tools", "cnxml2md.py")] + sys.argv[1:])  # the converter is shared by every CNXML book and lives in omnistax-content/tools/ (root rule 18)
