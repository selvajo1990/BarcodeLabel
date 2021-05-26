page 60101 "Barcode Label"
{
    PageType = CardPart;
    SourceTable = "Reason Code";
    Caption = ' ';
    layout
    {
        area(content)
        {
            usercontrol(Store; "Barcode Label")
            {
                ApplicationArea = All;
                trigger OnControlReady()
                begin
                end;
            }
        }
    }
    trigger OnAfterGetRecord()
    begin
        CurrPage.Store.showBarcode(Rec.Description);
    end;

}
