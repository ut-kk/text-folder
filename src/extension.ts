// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "text-folder" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.textFolding', texFolding);

	context.subscriptions.push(disposable);
}

function texFolding() {
	let editor = vscode.window.activeTextEditor;
	if (editor === undefined) {
		return;	// tormented by "undefined"
	}

	if (editor.selection.isEmpty) {
		vscode.window.showInformationMessage('Select Line');
		return;
	}

	let cur_selection = editor.selection;
	let text = editor.document.getText(cur_selection); //取得されたテキスト

	vscode.window.showInformationMessage(text);
}

// this method is called when your extension is deactivated
export function deactivate() {}
//vscode.window.showInformationMessage('Hello World!');
